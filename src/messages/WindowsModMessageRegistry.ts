import Message from "@wayward/game/language/dictionary/Message";
import Register from "@wayward/game/mod/ModRegistry";

export default class WindowsModMessageRegistry {

    @Register.message("MsgTestValue")
    public readonly messageTestValue: Message;

}