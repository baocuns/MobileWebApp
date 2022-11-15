import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

const Rating = ({ starSize, numberStar = 0 }) => {
    const [rating, setRating] = useState(numberStar);
    return (
        <StarRating
            rating={rating}
            onChange={setRating}
            starSize={starSize} d
        />
    );
}

const styles = StyleSheet.create({})

export default Rating;

