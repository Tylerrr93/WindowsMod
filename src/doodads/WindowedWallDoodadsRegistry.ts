import Mod from "@wayward/game/mod/Mod";
import Register, { Registry } from "@wayward/game/mod/ModRegistry";
import { ItemType } from "@wayward/game/game/item/IItem";
import { WINMOD_NAME } from "../Constants";
import WindowsMod from "src/Mod";
import { DoodadType } from "@wayward/game/game/doodad/IDoodad";

export default class WindowedWallDoodadsRegistry {

    @Mod.instance(WINMOD_NAME)
    public static readonly WINMOD: WindowsMod;

    @Register.doodad("GraniteWallWindow", {
        pickUp: [
            ItemType.GraniteWall, 
            Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow") 
        ], //Picks up into
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: ItemType.SheetOfGlass, //Repairs with
        particles: {
            r: 130,
            g: 128,
            b: 128
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 5
    })
    public doodadGraniteWallWindow: DoodadType;

    @Register.doodad("BasaltWallWindow", {
        pickUp: [
            ItemType.BasaltWall, 
            Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow")
        ], //Picks up into
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: ItemType.SheetOfGlass,
        particles: {
            r: 130,
            g: 128,
            b: 128
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 6
    })
    public doodadBasaltWallWindow: DoodadType;  

    @Register.doodad("IceWallWindow", {
        pickUp: [
            ItemType.IceWall, 
            Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow")
        ], //Picks up into
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: ItemType.SheetOfGlass,
        particles: {
            r: 130,
            g: 128,
            b: 128
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 4,
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
            12, //TileEventType.PuddleOfFreshWater
            12,
            12
        ],
        meltFromItem: ItemType.IceWall //Item that decides the melt-ability of the doodad
    })
    public doodadIceWallWindow: DoodadType;

    @Register.doodad("SnowWallWindow", {
        pickUp: [
            ItemType.SnowWall, 
            Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow")
        ], //Picks up into
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: ItemType.SheetOfGlass,
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
    public doodadSnowWallWindow: DoodadType;

    @Register.doodad("ClayWallWindow", {
        pickUp: [
            ItemType.ClayWall, 
            Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow")
        ], //Picks up into
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: ItemType.SheetOfGlass,
        particles: {
            r: 130,
            g: 128,
            b: 128
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 6
    })
    public doodadClayWallWindow: DoodadType;

    @Register.doodad("SandstoneWallWindow", {
        pickUp: [
            ItemType.SandstoneWall, 
            Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow")
        ], //Picks up into
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: ItemType.SheetOfGlass,
        particles: {
            r: 130,
            g: 128,
            b: 128
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 5
    })
    public doodadSandstoneWallWindow: DoodadType;

    @Register.doodad("WoodenWallWindow", {
        pickUp: [
            Registry<WindowsMod>(WINMOD_NAME).get("itemWoodenWallWindow")
        ], //Picks up into
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: Registry<WindowsMod>(WINMOD_NAME).get("itemWoodenWallWindow"),
        particles: {
            r: 130,
            g: 128,
            b: 128
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 4,
    })
    public doodadWoodenWallWindow: DoodadType;

    @Register.doodad("AshCementWallWindow", {
        pickUp: [
            ItemType.AshCementWall, 
            Registry<WindowsMod>(WINMOD_NAME).get("itemGlassWindow")
        ], //Picks up into
        blockMove: true,
        canBreak: true,
        blockJump: true,
        asItem: ItemType.SheetOfGlass,
        particles: {
            r: 130,
            g: 128,
            b: 128
        },
        reduceDurabilityOnGather: true,
        disableDrop: true,
        isWall: true,
        blockLos: false,
        civilizationScore: 3
    })
    public doodadAshCementWallWindow: DoodadType;

}