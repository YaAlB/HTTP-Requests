import React from 'react';
import {ScrollView, View} from 'react-native';

import BackgroundFirstScreen from './src/components/background';
import ModalPopup from './src/components/ModalPopup';

const App = () => {
  return (
    <BackgroundFirstScreen>
      <View style={{height: 50, flex: 2}}>
        <ScrollView>
          {/* <Text style={styles.text}>{splitData}</Text> */}
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <ModalPopup
          buttonText={'Total Unique IP Addresses'}
          data={'showUniqueAddresses'}
        />
        <ModalPopup
          buttonText={'Top Three IP-Addresses'}
          data={'showTopThreeIPAddresses'}
        />
        <ModalPopup buttonText={'Top Three URLs'} data={'showTopThreeURLs'} />
      </View>
    </BackgroundFirstScreen>
  );
};

export default App;
