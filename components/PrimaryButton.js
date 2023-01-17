import { View, Text } from "react-native";
                    //umesto props.children moze i ovako destruktuiranje objekta
function PrimaryButton({children}){
    return (
        <View>
            {/* nije svuda isti text */}
            <Text>{children}</Text>
        </View>
    )

}

export default PrimaryButton;