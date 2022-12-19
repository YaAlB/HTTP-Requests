import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import fnc from '../data/index';

interface Props {
  buttonText: string;
  data: string;
}

interface objArrays {
  key: number;
  value: string | null;
  occurence: number | null;
}

const ModalPopup: React.FC<Props> = ({buttonText, data}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const URLs = fnc.getData('URLs');
  const IPAddresses = fnc.getData('IPAddresses');

  const sortedIPAddresses = fnc.sortValues(IPAddresses, IPAddresses.length);
  const sortedURLs = fnc.sortValues(URLs, URLs.length);

  const uniqueIPNum =
    data === 'showUniqueAddresses' && fnc.uniqueIPAdresses(IPAddresses);
  const topThreeIPAddresses =
    data === 'showTopThreeIPAddresses' &&
    fnc.collectTopThree(sortedIPAddresses);
  const topThreeURLs =
    data === 'showTopThreeURLs' && fnc.collectTopThree(sortedURLs);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {data === 'showUniqueAddresses' ? (
              <Text style={styles.modalText}>{uniqueIPNum} {uniqueIPNum > 1 ? `IP-Addresses` : `IP-Address`}</Text>
            ) : data === 'showTopThreeIPAddresses' ? (
              topThreeIPAddresses?.map((item: objArrays, index: number) => (
                <View key={index}>
                  <Text style={styles.modalText}>IP-Address: {item.value}</Text>
                  { item.occurence && <Text style={styles.modalText}>
                    Used {item.occurence} {item.occurence > 1 ? `times` : `time`}
                  </Text>
}
                </View>
              ))
            ) : data === 'showTopThreeURLs' ? (
              topThreeURLs?.map((item: objArrays, index: number) => (
                <View key={index}>
                  <Text style={styles.modalText}>URL: {item.value}</Text>
                  {item.occurence && <Text style={styles.modalText}>
                    Viewed {item.occurence} {item.occurence > 1 ? `times` : `time`}
                  </Text>
}
                </View>
              ))
            ) : null}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 30,
    padding: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#ff8189',
  },
  buttonClose: {
    backgroundColor: '#fec744',
  },
  textStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalPopup;
