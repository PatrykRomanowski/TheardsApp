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
import Theards from "../classes/theards";

import Triangle from "../components/UI/Triangle";
import TheardsDescription from "../components/UI/TheardsDescription";
import BackgroundForTheardsButtons from "../components/UI/BackgroungForTheardsButtons";
import BackgroundForResult from "../components/UI/BackgroundForResult";

const theardsData = new Theards();
const screenHeight = Dimensions.get("window").height;

const MainScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Użyj stanu, aby przechowywać aktualny indeks
  const [actualOption, setActualOption] = useState(1); // aktualny rodzaj gwintu, wewnetrzny lub zaewnętrzny
  const [currentIndexForSize, setCurrentIndexForSize] = useState(1);
  const [currentIndexForPitch, setCurrentIndexForPitch] = useState(1);
  const [data, setData] = useState([]);
  const [unit, setUnit] = useState("MM");
  const [theardSize, setTheardSize] = useState([]);
  const [theardPitch, setTheardPitch] = useState([]);
  const [showDate, setShowData] = useState([]);

  const screenWidth = Dimensions.get("window").width;

  const elementWidth = screenWidth * 0.12;
  const elementWidth2 = screenWidth * 0.01143;

  const scrollViewRef = useRef(null);
  const scrollViewRefForSize = useRef(null);
  const scrollViewRefForPitch = useRef(null);

  const test = () => {
    console.log("test");
  };

  const actualOptionHandler = (optionSelected) => {
    setActualOption(optionSelected);
  };

  useEffect(() => {
    theardsData.addTheards("M");
    theardsData.addTheards("G");

    theardsData.addSize("M", "M10");
    theardsData.addSize("M", "M12");
    theardsData.addPitch("M", "M12", "2.0", 10.5, 10.35, 10.65);
    theardsData.addPitch("M", "M12", "2.2", 10.3, 10.15, 10.45);
    theardsData.addPitch("M", "M12", "2.5", 10.1, 9.95, 10.25);
    theardsData.addPitch("M", "M10", "1.5", 8.5, 8.35, 8.65);

    for (let i = 0; i < 3; i++) {
      const x = "";
      setData((data) => [...data, x]);
    }

    for (const item in theardsData) {
      for (const element in theardsData[item]) {
        setData((data) => [...data, element]);
      }
    }

    for (let i = 0; i < 7; i++) {
      const x = "XXX";
      setData((data) => [...data, x]);
    }
    for (let i = 0; i < 3; i++) {
      const x = "";
      setData((data) => [...data, x]);
    }
  }, []);

  useEffect(() => {
    setTheardSize([]);
    setTheardPitch([]);
    setCurrentIndexForSize(1);
    setCurrentIndexForPitch(1);

    for (let i = 0; i < 3; i++) {
      const x = "";
      setTheardSize((theardSize) => [...theardSize, x]);
    }

    for (const item in theardsData) {
      for (const element in theardsData[item]) {
        if (element === data[currentIndex + 2]) {
          // console.log(theardsData[item][element]);
          for (const size in theardsData[item][element].theardsSize) {
            setTheardSize((theardSize) => [...theardSize, size]);
          }
        }
      }
    }

    for (let i = 0; i < 3; i++) {
      const x = "";
      setTheardSize((theardSize) => [...theardSize, x]);
    }
  }, [currentIndex, data]);

  useEffect(() => {
    setTheardPitch([]);
    setShowData([]);

    setCurrentIndexForPitch(1);
    for (let i = 0; i < 3; i++) {
      const x = "";
      setTheardPitch((theardPitch) => [...theardPitch, x]);
    }

    for (const item in theardsData) {
      for (const element in theardsData[item]) {
        if (element === data[currentIndex + 2]) {
          // console.log(theardsData[item][element]);
          for (const size in theardsData[item][element].theardsSize) {
            if (size === theardSize[currentIndexForSize + 2]) {
              for (const pitch in theardsData[item][element].theardsSize[
                size
              ]) {
                for (const pitchData in theardsData[item][element].theardsSize[
                  size
                ][pitch]) {
                  console.log(pitchData);
                  console.log(
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].max
                  );
                  const min =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].min;
                  const max =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].max;
                  const hole =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].hole;

                  const newItem = {
                    min,
                    max,
                    hole,
                  };
                  console.log(newItem);
                  setShowData((showDate) => [...showDate, newItem]);

                  setTheardPitch((theardPitch) => [...theardPitch, pitchData]);
                }
              }
            }
          }
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      const x = "";
      setTheardPitch((theardPitch) => [...theardPitch, x]);
    }
  }, [currentIndexForSize, theardSize]);

  const renderText = (text, index, indexType) => {
    let textStyle = [styles.text1, styles.opacity10];

    if (index === indexType + 2) {
      textStyle = [textStyle, styles.opacity100];
    }
    if (index === indexType + 3 || index === indexType + 1) {
      textStyle = [textStyle, styles.opacity50];
    }
    if (index === indexType + 4 || index === indexType) {
      textStyle = [textStyle, styles.opacity30];
    }
    if (index === indexType + 5 || index === indexType - 1) {
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
    }, 800);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollViewRefForSize.current.scrollTo({
        x: (currentIndexForSize - 1) * (elementWidth + elementWidth2 * 2),
        y: 0,
        animated: true,
      });
    }, 800);
    return () => clearTimeout(timer);
  }, [currentIndexForSize]);

  useEffect(() => {
    // setTheardPitch([]);

    const timer = setTimeout(() => {
      scrollViewRefForPitch.current.scrollTo({
        x: (currentIndexForPitch - 1) * (elementWidth + elementWidth2 * 2),
        y: 0,
        animated: true,
      });
    }, 800);
    return () => clearTimeout(timer);
  }, [currentIndexForPitch]);

  const handleScroll = (event) => {
    // przesuwanie dla typu gwintu
    const contentOffsetX = event.nativeEvent.contentOffset.x;

    const index = Math.floor(
      contentOffsetX / (elementWidth + elementWidth2 * 2) + 1.5
    ); // Przyjmując stałą szerokość elementów
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const handleScrollForSize = (event) => {
    // przesuwanie dla rodzaju gwintu
    const contentOffsetX = event.nativeEvent.contentOffset.x;

    const index = Math.floor(
      contentOffsetX / (elementWidth + elementWidth2 * 2) + 1.5
    ); // Przyjmując stałą szerokość elementów
    if (index !== currentIndexForSize) {
      setCurrentIndexForSize(index);
    }
  };

  const handleScrollForPitch = (event) => {
    // przesuwanie dla rodzaju gwintu
    const contentOffsetX = event.nativeEvent.contentOffset.x;

    const index = Math.floor(
      contentOffsetX / (elementWidth + elementWidth2 * 2) + 1.5
    ); // Przyjmując stałą szerokość elementów
    if (index !== currentIndexForPitch) {
      setCurrentIndexForPitch(index);
    }
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.resoultContainer}>
          <BackgroundForTheardsButtons
            actualOptionHandler={actualOptionHandler}
          />
          <BackgroundForResult data={showDate} index={currentIndexForPitch} />
        </View>
        <View style={styles.parametersContainer}>
          <TheardsDescription text="SELECT THEARD TYPE" />

          <View style={styles.scrollContainer}>
            <ScrollView
              ref={scrollViewRef}
              onScroll={handleScroll}
              style={styles.container}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {data.map((text, index) => renderText(text, index, currentIndex))}
            </ScrollView>
            <View style={styles.triangleContainer}>
              <Triangle />
            </View>
          </View>

          <TheardsDescription text="SELECT DIAMETER THEARD" />
          <View style={styles.scrollContainer}>
            <ScrollView
              ref={scrollViewRefForSize}
              onScroll={handleScrollForSize}
              style={styles.container}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {theardSize.map((text, index) =>
                renderText(text, index, currentIndexForSize)
              )}
            </ScrollView>
            {theardSize.length > 6 ? (
              <View style={styles.triangleContainer}>
                <Triangle />
              </View>
            ) : null}
          </View>
          <TheardsDescription text="SELECT THEARD PITCH" />
          <View style={styles.scrollContainer}>
            <ScrollView
              ref={scrollViewRefForPitch}
              onScroll={handleScrollForPitch}
              style={styles.container}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {theardPitch.map((text, index) =>
                renderText(text, index, currentIndexForPitch)
              )}
            </ScrollView>
            {theardPitch.length > 6 ? (
              <View style={styles.triangleContainer}>
                <Triangle />
              </View>
            ) : null}
          </View>
        </View>

        {/* <Button onPress={test} title="Click Me" /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: "white",
  },
  theardsDescription: {
    marginTop: 0,
    // flex: 5,
  },
  mainContainer: {
    height: "100%",
    maxHeight: screenHeight * 1,
    backgroundColor: "#0A0A0B",
    // flex: 1,
  },

  parametersContainer: {
    maxHeight: screenHeight * 0.5, // 40% wysokości ekranu
    height: screenHeight * 0.5,
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
    // justifyContent: "center",
  },

  resoultContainer: {
    height: screenHeight * 0.5, // 40% wysokości ekranu
  },

  textContainer: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 52,
  },

  container: {
    backgroundColor: "#0A0A0B",
    margin: 0,
    padding: 0,
    // height: 40,
  },

  triangleContainer: {
    width: "100vw",
    alignItems: "center",
    // flex: 5,
    borderColor: "red",
    borderWidth: 1,
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
