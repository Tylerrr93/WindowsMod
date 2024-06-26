import Message from "@wayward/game/language/dictionary/Message";
import Register from "@wayward/game/mod/ModRegistry";

export default class WindowsModMessageRegistry {

    @Register.message("MsgTestValue")
    public readonly messageTestValue: Message;

    @Register.message("MsgDebugWindow1")
    public readonly messageDebugWindow1: Message;

}