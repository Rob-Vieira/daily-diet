import { Icon, IconProps } from "@components/Icon";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & IconProps;

export function ButtonIcon({name, size = 16, color = '#000000', ...rest}: Props){
    return (
        <TouchableOpacity {...rest}>
            <Icon 
                name={name} 
                size={size} 
                color={color} 
            />
        </TouchableOpacity>
    )
}