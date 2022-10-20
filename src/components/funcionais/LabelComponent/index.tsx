import React from "react";
import { COLORS } from "../../../colors";
import { Text } from "../TextComponent";

export const LabelComponent = ({ text }) => {
    return (
        <Text style={{ color: COLORS.secondary }}>{text}</Text>

    )
}