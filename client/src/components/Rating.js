import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

const Rating = () => {
    const [rating, setRating] = useState(4.6);
    return (
        <StarRating
            rating={rating}
            onChange={setRating}
            starSize={20}
        />
    );
}

const styles = StyleSheet.create({})

export default Rating;

