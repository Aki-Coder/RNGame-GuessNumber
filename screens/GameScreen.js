import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";

//generate random number                   //iskljucuje odredjeni broj-da ne moze odmah na pocetku da pogodi broj
function generateRandomBetween(min, max, exclude){
                            //kreira random broj
    const rndNum = Math.floor(Math.random() * (max-min)) + min; //math floor da float da u int broj

    if (rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen({userNumber}){
    const initialGuess = generateRandomBetween(1, 100, userNumber );
    const[currentGuess, setCurrentGuess] = useState(initialGuess); //broj sa ekrana

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower</Text>
            </View>
            <View>

            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24
    },
})

export default GameScreen;