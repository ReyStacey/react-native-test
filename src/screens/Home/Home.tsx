import * as React from 'react'
import { SafeAreaView, Text, StyleSheet, Image, View } from 'react-native'
import { THEME } from '../../store/theme'

interface AboutApp {
  uri: string
  title: string
  description: {
    about: string
    technology: string
  }
}

const ABOUT_APP: AboutApp = {
  uri: 'https://v3.polo-static.com/spot-web/static/img/01.light.25285b47.png',
  title: 'MarkersTicker',
  description: {
    about:
      'MarketsTicker - это мобильное приложение, предназначенное для отслеживания актуальных данных о криптовалютах. Приложение обеспечивает пользователя удобным способом мониторить изменения цен, объемов торгов и других ключевых показателей для различных криптовалют.',
    technology:
      'Разработано с использованием React Native для создания кросс-платформенного мобильного интерфейса. Использует MobX для эффективного управления состоянием данных. TypeScript обеспечивает статическую типизацию, повышая безопасность кода и облегчая его понимание.',
  },
}

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: ABOUT_APP.uri }} style={styles.image} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{ABOUT_APP.title}</Text>
        <View style={styles.block}>
          <Text style={styles.description}>{ABOUT_APP.description.about}</Text>
          <Text style={styles.description}>
            {ABOUT_APP.description.technology}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: THEME.primaryColor,
  },
  wrapper: {
    marginTop: 40,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: THEME.snowColor,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 10,
    color: THEME.primaryColor,
    textAlign: 'center',
  },
  block: {
    margin: -5,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    color: THEME.secondaryColor,
    padding: 5,
  },
})
