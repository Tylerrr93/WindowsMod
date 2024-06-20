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
import WindowedWallDoodadsRegistry from "./doodads/WindowedWallDoodadsRegistry";
import WindowedWallItemsRegistry from "./items/WindowedWallItemsRegistry";
 
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
                RecipeComponent(ItemType.SheetOfGlass, 1, 1, 1),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Glassblowing,
            level: RecipeLevel.Advanced,
            runeChance: [Deity.Good, 0.05],
        },
        durability: 10,
        weight: 4,
        worth: 40,
        spawnOnMerchant: [BiomeType.Random],
        noCraftingQualityBonus: true,
        recipeCache: []
    })
    public itemGlassWindow: ItemType;

	@Register.itemGroup("WindowItem", {
		types: [
            Registry<WindowsMod>().get("itemGlassWindow"),
            Registry<WindowsMod>().registry("items").get("itemWoodenWallWindow")
		],
		default: Registry<WindowsMod>().get("itemGlassWindow"),
	}) 
	public groupWindowsMod: ItemTypeGroup;
	
}
