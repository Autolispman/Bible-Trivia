function numberGenerator (lowerRange, upperRange) {
        return Math.floor(Math.random() * ((upperRange - lowerRange) + 1) + lowerRange );
    }