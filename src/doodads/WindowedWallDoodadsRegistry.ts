import Mod from "@wayward/game/mod/Mod";
import Register, { Registry } from "@wayward/game/mod/ModRegistry";
import { WINMOD_NAME } from "../Constants";
import WindowsMod from "src/Mod";
import { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import { TileEventType } from "@wayward/game/game/tile/ITileEvent";

export default class WindowedWallDoodadsRegistry {

    @Mod.instance(WINMOD_NAME)
    public static readonly WINMOD: WindowsMod;

    @Register.doodad("GraniteWallWindow", {
        pickUp: [
            Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemGraniteWallWindow")
        ], //Picks up into
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemGraniteWallWindow"),
        particles: {
            r: 130,
            g: 128,
            b: 128
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 4
    })
    public doodadGraniteWallWindow: DoodadType;

    @Register.doodad("BasaltWallWindow", {
        pickUp: [
            Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemBasaltWallWindow")
        ], 
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemBasaltWallWindow"),
        particles: {
            r: 39,
            g: 37,
            b: 37
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 5
    })
    public doodadBasaltWallWindow: DoodadType;  

    @Register.doodad("IceWallWindow", {
        pickUp: [
            Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemIceWallWindow")
        ], 
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemIceWallWindow"),
        particles: {
            r: 192,
            g: 236,
            b: 251
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 3,
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
        meltFromItem: Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemIceWallWindow")
    })
    public doodadIceWallWindow: DoodadType; 

    @Register.doodad("SnowWallWindow", {
        pickUp: [
            Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemSnowWallWindow")
        ], 
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemSnowWallWindow"),
        particles: {
            r: 255,
            g: 255,
            b: 255
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 3,
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
        meltFromItem: Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemSnowWallWindow")
    })
    public doodadSnowWallWindow: DoodadType;

    @Register.doodad("ClayWallWindow", {
        pickUp: [
            Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemClayWallWindow")
        ], 
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemClayWallWindow"),
        particles: {
            r: 200,
            g: 205,
            b: 207
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 5
    })
    public doodadClayWallWindow: DoodadType;

    @Register.doodad("SandstoneWallWindow", {
        pickUp: [
            Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemSandstoneWallWindow")
        ],
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemSandstoneWallWindow"),
        particles: {
            r: 199,
            g: 156,
            b: 128
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 4
    })
    public doodadSandstoneWallWindow: DoodadType;

    @Register.doodad("WoodenWallWindow", {
        pickUp: [
            Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemWoodenWallWindow")
        ],
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemWoodenWallWindow"),
        particles: {
            r: 132,
            g: 96,
            b: 44
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 4,
        isFlammable: true,
        burnsLike: [Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemWoodenWallWindow")]
    })
    public doodadWoodenWallWindow: DoodadType;

    @Register.doodad("AshCementWallWindow", {
        pickUp: [
            Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemAshCementWallWindow")
        ],
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: Registry<WindowsMod>(WINMOD_NAME).registry("items").get("itemAshCementWallWindow"),
        particles: {
            r: 136,
            g: 134,
            b: 132
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 2
    })
    public doodadAshCementWallWindow: DoodadType;

}