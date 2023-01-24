import { useEffect, useState } from "react"
import { Image, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"

import logoImg from "../../assets/logo-nlw-esports.png"

import { GameCard, GameCardProps } from "../../components/GameCard"
import { Background } from "../../components/Background"
import { Headling } from "../../components/Headling"

import { styles } from "./styles"
// import React from "react";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUrl })
  }
  useEffect(() => {
    fetch("http://192.168.15.8:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Headling
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          // keyStractor serve para dizer qual dado será utilizado como chave(valor unico) para ter mais performance
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal // é um valor BOOLEAN
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  )
}
