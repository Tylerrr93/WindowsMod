import Mod from "@wayward/game/mod/Mod";
import Register, { Registry } from "@wayward/game/mod/ModRegistry";
import { ItemType, ItemTypeGroup, RecipeLevel } from "@wayward/game/game/item/IItem";
import { WINMOD_NAME } from "../Constants";
import WindowsMod from "src/Mod";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { RecipeComponent } from "@wayward/game/game/item/ItemDescriptions";
import { SkillType } from "@wayward/game/game/entity/IHuman";
import { Deity } from "@wayward/game/game/deity/Deity";


export default class WindowedWallItemsRegistry {

    @Mod.instance(WINMOD_NAME)
    public static readonly WINMOD: WindowsMod;

    @Register.item("GraniteWallWindow", {
        use: [ActionType.Build],
        recipe: {
            components: [
                RecipeComponent(ItemType.GraniteWall, 1, 1, 1),
                RecipeComponent(Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow"), 1, 1, 1),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Stonecrafting,
            level: RecipeLevel.Advanced,
            runeChance: [Deity.Good, 0.05]
        },
        craftable: false,
        disassemble: false,
        onUse: {
            [ActionType.Build]: {
                type: Registry<WindowsMod>(WINMOD_NAME).registry("doodads").get("doodadGraniteWallWindow")
            }
        },
        worth: 55,
        durability: 25,
    })
    public itemGraniteWallWindow: ItemType;

    @Register.item("BasaltWallWindow", {
        use: [ActionType.Build],
        recipe: {
            components: [
                RecipeComponent(ItemType.BasaltWall, 1, 1, 1),
                RecipeComponent(Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow"), 1, 1, 1),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Stonecrafting,
            level: RecipeLevel.Advanced,
            runeChance: [Deity.Good, 0.05]
        },
        craftable: false,
        disassemble: false,
        onUse: {
            [ActionType.Build]: {
                type: Registry<WindowsMod>(WINMOD_NAME).registry("doodads").get("doodadBasaltWallWindow")
            }
        },
        worth: 110,
        durability: 50
    })
    public itemBasaltWallWindow: ItemType;

    @Register.item("WoodenWallWindow", {
        use: [ActionType.Build],
        recipe: {
            components: [
                RecipeComponent(ItemType.WoodenWall, 1, 1, 1),
                RecipeComponent(Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow"), 1, 1, 1),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Woodworking,
            level: RecipeLevel.Advanced,
            runeChance: [Deity.Good, 0.05]
        },
        craftable: false,
        disassemble: false,
        onUse: {
            [ActionType.Build]: {
                type: Registry<WindowsMod>(WINMOD_NAME).registry("doodads").get("doodadWoodenWallWindow")
            }
        },
        worth: 55,
        durability: 15,
        flammable: true,
        onBurn: [
            ItemType.WoodenPlank,
            ItemType.Log,
            ItemType.SharpGlass,
            ItemType.SharpGlass
        ]
    }) 
    public itemWoodenWallWindow: ItemType; 

}