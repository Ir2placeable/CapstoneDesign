import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import styles from '../src/Styles';
import router from '../src/Router.json';
import CustomButton from '../src/CustomButton';
import 'react-native-gesture-handler';


const theme = styles.Color_Main2

function WithDraw({ route, navigation }) {
    const { club_id } = route.params;
    return (
        <View style={[styles.Center_Container, { backgroundColor: theme }]}>
            <View style={[styles.title, extra.Input_container, { alignItems: 'center', backgroundColor: theme }]}>
                <Text style={[styles.Font_Title2, { color: 'white' }]}>
                    출금 내역 등록방식을 선택해주세요
                </Text>
                <View style={[{ marginTop: 30, width: '90%', height: 55, backgroundColor: 'theme', flexDirection: 'row' }]}>
                    <CustomButton
                        title='직접 입력'
                        buttonColor='white'
                        titleColor='#3a527a'
                        onPress={() => navigation.navigate("ManualReceipt", {
                            club_id: club_id
                        })}
                    />
                    <CustomButton
                        title='카메라 인식'
                        buttonColor='white'
                        titleColor='#3a527a'
                        onPress={() => navigation.navigate('Camera', {
                            club_id: club_id
                        })}
                    />
                </View>
            </View>
        </View>
    );
}

const extra = StyleSheet.create({
    Input_container: {
        marginBottom: 15,
    }
})
export default WithDraw;