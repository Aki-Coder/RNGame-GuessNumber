import { View, Text, Pressable, StyleSheet } from "react-native";
                    //umesto props.children moze i ovako destruktuiranje objekta
function PrimaryButton({children}){

    function pressHandler(){
        console.log('hi');
    }


    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={pressHandler}
                android_ripple={{color:'#640233'}}
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer }
                >
                    <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
      
    )

}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'     
    },
    buttonInnerContainer:{
        backgroundColor:'#72063c',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    //for ios 
    pressed:{
        opacity:0.75
    }

})

export default PrimaryButton;