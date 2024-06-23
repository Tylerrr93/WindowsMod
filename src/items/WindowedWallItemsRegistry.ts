import Mod from "@wayward/game/mod/Mod";
import Register, { Registry } from "@wayward/game/mod/ModRegistry";
import { ItemType, ItemTypeGroup, RecipeLevel } from "@wayward/game/game/item/IItem";
import { WINMOD_NAME } from "../Constants";
import WindowsMod from "src/Mod";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { RecipeComponent } from "@wayward/game/game/item/ItemDescriptions";
import { SkillType } from "@wayward/game/game/entity/IHuman";
import { Deity } from "@wayward/game/game/deity/Deity";
import { DamageType } from "@wayward/game/game/entity/IEntity";
import { TileEventType } from "@wayward/game/game/tile/ITileEvent";


export default class WindowedWallItemsRegistry {

    @Mod.instance(WINMOD_NAME)
    public static readonly WINMOD: WindowsMod;

    @Register.item("GraniteWallWindow", {
        use: [ActionType.Build],
        recipe: {
            components: [
                RecipeComponent(ItemType.GraniteWall, 1, 1, 1),
                RecipeComponent(Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow"), 1, 1, 0),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Stonecrafting,
            level: RecipeLevel.Advanced,
            runeChance: [Deity.Good, 0.05]
        },
        craftable: false,
        canDisassemble: false,
        onUse: {
            [ActionType.Build]: {
                type: Registry<WindowsMod>(WINMOD_NAME).registry("doodads").get("doodadGraniteWallWindow")
            }
        },
        worth: 55,
        durability: 25,
        group: [
            ItemTypeGroup.Housing
        ],
        recipeCache: []
    })
    public itemGraniteWallWindow: ItemType; 

    @Register.item("BasaltWallWindow", {
        use: [ActionType.Build],
        recipe: {
            components: [
                RecipeComponent(ItemType.BasaltWall, 1, 1, 1),
                RecipeComponent(Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow"), 1, 1, 0),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Stonecrafting,
            level: RecipeLevel.Advanced,
            runeChance: [Deity.Good, 0.05]
        },
        craftable: false,
        canDisassemble: false,
        onUse: {
            [ActionType.Build]: {
                type: Registry<WindowsMod>(WINMOD_NAME).registry("doodads").get("doodadBasaltWallWindow")
            }
        },
        worth: 110,
        durability: 50,
        group: [
            ItemTypeGroup.Housing
        ],
        recipeCache: []
    })
    public itemBasaltWallWindow: ItemType;

    @Register.item("IceWallWindow", {
        use: [ActionType.Build],
        recipe: {
            components: [
                RecipeComponent(ItemType.IceBrick, 6, 6, 2),
                RecipeComponent(Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow"), 1, 1, 1),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Tinkering,
            level: RecipeLevel.Advanced,
            runeChance: [Deity.Good, 0.05]
        },
        craftable: false,
        storeDisassemblyItems: true,
        canDisassemble: false,
        onUse: {
            [ActionType.Build]: {
                type: Registry<WindowsMod>(WINMOD_NAME).registry("doodads").get("doodadIceWallWindow")
            }
        },
        worth: 130,
        durability: 10,
        decayTemperatureRange: {
            temperature: {
                minimum: -40,
                maximum: 50
            },
            decayChance: {
                minimum: 0,
                maximum: 20
            }
        },
        decayMax: 2500,
        damageType: DamageType.Cold,
        onBurn: [
            ItemType.None
        ],
        meltsInto: [
            TileEventType.PuddleOfFreshWater,
            TileEventType.PuddleOfFreshWater
        ],
        temperature: -25,
        dropDissassemblyItemsOnMelt: [
            ItemType.IceBrick,
            Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow")
        ],
        group: [
            ItemTypeGroup.Housing,
            ItemTypeGroup.FireExtinguisher
        ],
        recipeCache: []
    })
    public itemIceWallWindow: ItemType

    @Register.item("SnowWallWindow", {

        use: [ActionType.Build],
        recipe: {
            components: [
                RecipeComponent(ItemType.SnowBrick, 6, 6, 2),
                RecipeComponent(Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow"), 1, 1, 1),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Tinkering,
            level: RecipeLevel.Advanced,
            runeChance: [Deity.Good, 0.05]
        },
        craftable: false,
        storeDisassemblyItems: true,
        canDisassemble: false,
        onUse: {
            [ActionType.Build]: {
                type: Registry<WindowsMod>(WINMOD_NAME).registry("doodads").get("doodadSnowWallWindow")
            }
        },
        worth: 130,
        durability: 10,
        decayMax: 2000,
        damageType: DamageType.Cold,
        onBurn: [
            ItemType.None
        ],
        decayTemperatureRange: {
            temperature: {
                minimum: -40,
                maximum: 50
            },
            decayChance: {
                minimum: 0,
                maximum: 20
            }
        },
        meltsInto: [
            TileEventType.PuddleOfFreshWater,
            TileEventType.PuddleOfFreshWater
        ],
        temperature: -25,
        group: [
            ItemTypeGroup.Housing,
            ItemTypeGroup.FireExtinguisher
        ],
        recipeCache: []
    })
    public itemSnowWallWindow: ItemType

    @Register.item("ClayWallWindow", {

        use: [ActionType.Build],
        recipe: {
            components: [
                RecipeComponent(ItemType.ClayBrick, 6, 6, 2),
                RecipeComponent(Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow"), 1, 1, 1),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Claythrowing,
            level: RecipeLevel.Advanced,
            runeChance: [Deity.Good, 0.05]
        },
        craftable: false,
        canDisassemble: false,
        onUse: {
            [ActionType.Build]: {
                type: Registry<WindowsMod>(WINMOD_NAME).registry("doodads").get("doodadClayWallWindow")
            }
        },
        worth: 55,
        durability: 20,
        group: [
            ItemTypeGroup.Housing
        ],
        recipeCache: []
    })
    public itemClayWallWindow: ItemType

    @Register.item("SandstoneWallWindow", {
        use: [ActionType.Build],
        recipe: {
            components: [
                RecipeComponent(ItemType.Sandstone, 6, 6, 2),
                RecipeComponent(Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow"), 1, 1, 1),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Stonecrafting,
            level: RecipeLevel.Advanced,
            runeChance: [Deity.Good, 0.05]
        },
        craftable: false,
        canDisassemble: false,
        durability: 15,
        onUse: {
            [ActionType.Build]: {
                type: Registry<WindowsMod>(WINMOD_NAME).registry("doodads").get("doodadSandstoneWallWindow")
            }
        },
        worth: 55,
        group: [
            ItemTypeGroup.Housing
        ],
        recipeCache: []
    })
    public itemSandstoneWallWindow: ItemType

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
        canDisassemble: false,
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

    @Register.item("AshCementWallWindow", {
        use: [ActionType.Build],
        recipe: {
            components: [
                RecipeComponent(ItemType.AshCementBrick, 6, 6, 2),
                RecipeComponent(Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow"), 1, 1, 1),
                RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0)
            ],
            skill: SkillType.Stonecrafting,
            level: RecipeLevel.Advanced,
            runeChance: [Deity.Good, 0.05]
        },
        craftable: false,
        canDisassemble: false,
        durability: 10,
        onUse: {
            [ActionType.Build]: {
                type: Registry<WindowsMod>(WINMOD_NAME).registry("doodads").get("doodadAshCementWallWindow")
            }
        },
        worth: 55,
        group: [
            ItemTypeGroup.Housing
        ],
        recipeCache: []
    })
    public itemAshCementWallWindow: ItemType

}