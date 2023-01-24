import { Text, TouchableOpacity, View } from "react-native"
import { DuoInfo } from "../DuoInfo"

import { THEME } from "../../theme"
import { styles } from "./styles"
import { GameController } from "phosphor-react-native"

export interface DuoCardProps {
  hourEnd: string
  hourStart: string
  id: string
  name: string
  useVoiceChat: boolean
  weekDays: string[]
  yearsPlaying: number
}

interface Props {
  data: DuoCardProps
  onConnect: () => void
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd} `}
      />
      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChat ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChat ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />
      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />

        <Text style={styles.buttontitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}
