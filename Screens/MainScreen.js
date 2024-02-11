import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  StatusBar,
  Dimensions,
  Button,
} from "react-native";
import { useState, useEffect } from "react";

const MainScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Użyj stanu, aby przechowywać aktualny indeks
  const [offset, setOffset] = useState(0);

  const screenWidth = Dimensions.get("window").width;
  const elementWidth = screenWidth * 0.12;
  const elementWidth2 = screenWidth * 0.01143;

  const scrollViewRef = useRef(null);

  const data = ["", "", "", "G", "M", "UHT", "UMC", "NPT", "LMD", "", "", ""];

  const scrollToOffset = (offset) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: offset, y: 0, animated: true });
    }
  };

  const renderText = (text, index) => {
    let textStyle = [styles.text1, styles.opacity10];

    if (index === currentIndex + 2) {
      textStyle = [textStyle, styles.opacity100];
    }
    if (index === currentIndex + 3 || index === currentIndex + 1) {
      textStyle = [textStyle, styles.opacity50];
    }
    if (index === currentIndex + 4 || index === currentIndex) {
      textStyle = [textStyle, styles.opacity30];
    }
    if (index === currentIndex + 5 || index === currentIndex - 1) {
      textStyle = [textStyle, styles.opacity10];
    }

    return (
      <Text
        key={index}
        style={[textStyle, { width: elementWidth, margin: elementWidth2 }]}
      >
        {text}
      </Text>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollViewRef.current.scrollTo({
        x: (currentIndex - 1) * (elementWidth + elementWidth2 * 2),
        y: 0,
        animated: true,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    console.log("Aktualna pozycja przewijania (x):", contentOffsetX);
    console.log("Aktualna pozycja przewijania (y):", contentOffsetY);

    const index = Math.floor(
      contentOffsetX / (elementWidth + elementWidth2 * 2) + 1.5
    ); // Przyjmując stałą szerokość elementów
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        style={styles.container}
        horizontal={true}
      >
        {data.map((text, index) => renderText(text, index))}
      </ScrollView>

      <Button
        title="Przewiń do pozycji 100"
        onPress={() => scrollToOffset(100)}
      />

      <View></View>
      <Text>Aktualny indeks: {currentIndex}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text1: {
    width: 60,
    height: 40,
    backgroundColor: "red",
  },
  container: {
    backgroundColor: "black",
  },
  opacity100: {
    opacity: 1,
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity30: {
    opacity: 0.3,
  },
  opacity10: {
    opacity: 0.1,
  },
});

export default MainScreen;
