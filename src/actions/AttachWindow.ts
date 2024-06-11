import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { Action } from "@wayward/game/game/entity/action/Action";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import { RenderSource } from "@wayward/game/renderer/IRenderer";
import WindowsMod from "../Mod";

export default new Action(ActionArgument.ItemInventory)
    .setUsableBy(EntityType.Human)
    .setCanUse((action) => {

        const targetDoodad = action.executor.facingTile?.doodad;

        const validDoodadsForAttachingWindow = [DoodadType.GraniteWall, DoodadType.BasaltWall, DoodadType.IceWall, DoodadType.SnowWall, DoodadType.ClayWall, DoodadType.WoodenWall, DoodadType.AshCementWall, DoodadType.SandstoneWall] 

        if (targetDoodad && validDoodadsForAttachingWindow.includes(targetDoodad.type)) {
            console.log("Attach window action can be used");
            return { usable: true };
        }
        console.log("Attach window action cannot be used");
        return { usable: false };

    })
    .setHandler((action, item) => {

        const player = action.executor;
        const tile = action.executor.facingTile;
        const tileDoodad = tile.doodad!;
        const island = player.island;

        let newDoodadType;
        switch (tileDoodad.type) {
            // Vanilla walls
            case DoodadType.GraniteWall:
                newDoodadType = WindowsMod.WINMOD.doodads.doodadGraniteWallWindow;
                break;
            case DoodadType.BasaltWall:
                newDoodadType = WindowsMod.WINMOD.doodads.doodadBasaltWallWindow;
                break;
            case DoodadType.IceWall:
                newDoodadType = WindowsMod.WINMOD.doodads.doodadIceWallWindow;
                break;
            case DoodadType.SnowWall:
                newDoodadType = WindowsMod.WINMOD.doodads.doodadSnowWallWindow;
                break;
            case DoodadType.ClayWall:
                newDoodadType = WindowsMod.WINMOD.doodads.doodadClayWallWindow;
                break;
            case DoodadType.WoodenWall:
                newDoodadType = WindowsMod.WINMOD.doodads.doodadWoodenWallWindow;
                break;
            case DoodadType.AshCementWall:
                newDoodadType = WindowsMod.WINMOD.doodads.doodadAshCementWallWindow;
                break;
            case DoodadType.SandstoneWall:
                newDoodadType = WindowsMod.WINMOD.doodads.doodadSandstoneWallWindow;
                break;
            default:
                return; // Exit if the doodad type is not handled
        }

        action.executor.island.doodads.remove(tileDoodad);
        action.executor.island.doodads.create(newDoodadType, action.executor.facingTile);
        island.items.remove(item);

        // Updates so windowed wall is visible and so player has LOS through it now
        renderers.updateView(undefined, RenderSource.Mod, true);

        player.passTurn();

    });