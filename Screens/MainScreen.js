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
  const [currentIndex, setCurrentIndex] = useState(1); // Użyj stanu, aby przechowywać aktualny indeks
  const [offset, setOffset] = useState(0);

  const screenWidth = Dimensions.get("window").width;
  const elementWidth = screenWidth * 0.12;
  const elementWidth2 = screenWidth * 0.01143;

  const scrollViewRef = useRef(null);

  const data = ["", "", "", "G", "M", "UHT", "UMCM", "NPT", "LMD", "", "", ""];

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
      <View style={styles.textContainer} key={index}>
        <View
          style={[
            {
              width: elementWidth,
              margin: elementWidth2,
            },
          ]}
        >
          <Text style={textStyle}>{text}</Text>
        </View>
      </View>
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
      <Text style={{ fontFamily: "Inter_600SemiBold" }}>
        Aktualny indeks: {currentIndex}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: "white",
  },

  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },

  container: {
    backgroundColor: "black",
  },

  opacity100: {
    opacity: 1,
    fontFamily: "Inter_700Bold",
    fontSize: 32,
    width: "300%",
    textAlign: "center",
    display: "flex",
    alignSelf: "center",
  },
  opacity50: {
    opacity: 0.3,
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    width: "300%",
    textAlign: "center",
    display: "flex",
    alignSelf: "center",
  },
  opacity30: {
    opacity: 0.24,
    fontSize: 16,
  },
  opacity10: {
    opacity: 0.18,
    fontSize: 14,
  },
});

export default MainScreen;
