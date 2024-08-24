import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { PaperProvider, Button, TextInput } from 'react-native-paper'; 
import globalStyles from '../src/styles/globalStyles'; 

const PaymentBranchScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
const [branch, setBranch] = useState<string | null>(null);

const handlePaymentBranchSelection = (selectedBranch: string) => {
    setBranch(selectedBranch);
    navigation.navigate('Cart');
};

    return (
    <PaperProvider>
        <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Seleccione una sucursal de pago:</Text>
        <Button
            mode="contained"
            onPress={() => handlePaymentBranchSelection('Sucursal 1')}
        >
            Sucursal 1
        </Button>
        <Button
            mode="contained"
            onPress={() => handlePaymentBranchSelection('Sucursal 2')}
        >
            Sucursal 2
        </Button>
        </View>
    </PaperProvider>
    );
};

export default PaymentBranchScreen