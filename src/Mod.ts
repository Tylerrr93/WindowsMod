import Mod from "@wayward/game/mod/Mod";
import Register, { Registry } from "@wayward/game/mod/ModRegistry";
import { ItemType, ItemTypeGroup, RecipeLevel } from "@wayward/game/game/item/IItem";
import { Deity } from "@wayward/game/game/deity/Deity";
import { RecipeComponent} from "@wayward/game/game/item/ItemDescriptions";
import { SkillType } from "@wayward/game/game/entity/IHuman";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { BiomeType } from "@wayward/game/game/biome/IBiome";
import { WINMOD_NAME } from "./Constants";
import AttachWindow from "./actions/AttachWindow";
import { DoodadTypeGroup } from "@wayward/game/game/doodad/IDoodad";
import { DamageType } from "@wayward/game/game/entity/IEntity";
import WindowedWallDoodadsRegistry from "./doodads/WindowedWallDoodadsRegistry";
import WindowedWallItemsRegistry from "./items/WindowedWallItemsRegistry";
import WindowsModMessageRegistry from "./messages/WindowsModMessageRegistry";
import { EventHandler } from "@wayward/game/event/EventManager";
import { EventBus } from "@wayward/game/event/EventBuses";
import Doodad from "@wayward/game/game/doodad/Doodad";
import Item from "@wayward/game/game/item/Item";
import { Quality } from "@wayward/game/game/IObject";
import TileEvent from "@wayward/game/game/tile/TileEvent"; 
 
//////////////////////////////////////////////////////////////////////////////////////
//To get item and doodad descriptions from in game f10 console:
//Reflection.export("doodadDescriptions") && Reflection.export("itemDescriptions")
//Then reference to the item/doodad descriptions on Wayward types viewer:
//https://waywardgame.github.io/development/enums/game_item_IItem.ItemType.html
//https://waywardgame.github.io/enums/game_doodad_IDoodad.DoodadType.html
///////////////////////////////////////////////////////////////////////////////////////

export default class WindowsMod extends Mod {

    @Mod.instance(WINMOD_NAME)
    public static readonly WINMOD: WindowsMod;

    /////////////////////////
    //Registries

    //Windowed wall doodads registry
    @Register.registry(WindowedWallDoodadsRegistry)
	public readonly doodads: WindowedWallDoodadsRegistry;

    //WIndowed wall items registry
    @Register.registry(WindowedWallItemsRegistry)
    public readonly items: WindowedWallItemsRegistry;

    //Messages registry
    @Register.registry(WindowsModMessageRegistry)
    public readonly messages: WindowsModMessageRegistry;

    ////////////////////////
    //Actions registrations

    @Register.action("AttachWindow", AttachWindow)
    public readonly actionAttachWindow: ActionType;

    //////////////////////
    //Items registrations

    @Register.item("GlassWindow", {
        use: [Registry<WindowsMod>().get("actionAttachWindow")],
        recipe: {
            components: [
                RecipeComponent(ItemType.WoodenPlank, 2, 2, 2),
                RecipeComponent(ItemType.SheetOfGlass, 2, 2, 2),
                RecipeComponent(ItemType.ClayBlowpipe, 1, 0, 0),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Glassblowing,
            level: RecipeLevel.Advanced,
            requiredDoodads: [DoodadTypeGroup.LitKiln],
            runeChance: [Deity.Good, 0.05],
        },
        durability: 10,
        damageType: DamageType.Slashing,
        worth: 40,
        spawnOnMerchant: [BiomeType.Random],
        noCraftingQualityBonus: true,
        group:[
            ItemTypeGroup.CraftingMaterial
        ],
        recipeCache: []
    })
    public itemGlassWindow: ItemType;  

    @EventHandler(EventBus.Doodads, "revertToItem")
    public iceSnowWallRevertToItem(doodad: Doodad, item: Item) {
        if (doodad.type === this.doodads.doodadIceWallWindow || doodad.type === this.doodads.doodadSnowWallWindow) { 
                // Retrieve custom data from the doodad and store on item
                const windowItemDura = doodad.getData<number>("windowDura");
                const windowItemDuraMax = doodad.getData<number>("windowDuraMax");
                item.setData("windowDura", windowItemDura);
                item.setData("windowDuraMax", windowItemDuraMax);
                //console.log("Doodad to item -> data set");
                //console.log("Item melt dacay:" + item.getDecayTime());
        }
    }

    @EventHandler(EventBus.Doodads, "becomeFromItem")
    public iceSnowItemRevertToDoodad(doodad: Doodad, item: Item) {

        if (item.type === this.items.itemIceWallWindow || item.type === this.items.itemSnowWallWindow) {
                // Retrieve custom data from the item and store on doodad
                const windowItemDura = item.getData<number>("windowDura");
                const windowItemDuraMax = item.getData<number>("windowDuraMax");
                doodad.setData("windowDura", windowItemDura);
                doodad.setData("windowDuraMax", windowItemDuraMax);
                //console.log("Item to doodad -> data set");
                //console.log("Doodad melt decay:" + doodad.meltDecay);
        }
    }

    @EventHandler(EventBus.Doodads, "melted")
    public catchSnowIceWindowedWallMelting(
        host: Doodad, 
        producedItems: Item[], 
        producedTileEvents: TileEvent[], 
        producedDoodad: Doodad | undefined) {

        if (host.type === this.doodads.doodadIceWallWindow || this.doodads.doodadSnowWallWindow) {
            console.log("Windowed ice or snow wall has melted, attempting to create window item from data")
            // Retrieve custom data from the doodad
            const windowItemDura = host.getData<number>("windowDura");
            const windowItemDuraMax = host.getData<number>("windowDuraMax");
            // Create the item on the doodad's tile
            const createdItem = host.tile.island.items.create(this.itemGlassWindow, host.tile.asContainer, Quality.None);
            // Set the durability of the created item
            if (createdItem && windowItemDura !== undefined && windowItemDuraMax !== undefined) {
                //Damage the window item by 1
                createdItem.durability = windowItemDura - 1;
                createdItem.durabilityMax = windowItemDuraMax;
            }
        }

    }


}
