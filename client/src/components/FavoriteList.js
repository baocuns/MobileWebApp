import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import FavouriteItem from './FavouriteItem';

const FavariteList = ({ navigation }) => {

  const tourState = useSelector((state) => state.tour);
  const tours = tourState.favourite.tour;

  useEffect(() => {
    console.log(">>> check tours: ", tours);
  }, [tours]);
  return (
    <>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {tours.map((tour, index) => {
          if (tour.title !== undefined) {
            return (
              <FavouriteItem navigation={navigation} tour={tour} />
            )
          }
        })
        }

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
});

export default FavariteList;
