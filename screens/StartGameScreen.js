import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
    return(
        <View>
            <TextInput/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
        
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        //take much space as it can
        flex:1
    }

});

export default StartGameScreen;