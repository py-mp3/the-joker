import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native";


// {"type":"general","setup":"Can February march?","punchline":"No, but April may.","id":81}

type Joke = {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

export default function Index() {
  const [joke, setJoke] = useState<string>();
  const [punchline, setPunchline] = useState<string>();
  async function get_joke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    const data : Joke = await response.json();
    setJoke(data.setup);
    setPunchline(data.punchline);

      }
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>Click for a Joke</Text>
      <button onClick={get_joke}>Get Joke</button>
      <Text>{joke}</Text>
      <div>
        <text>{punchline}</text>
      </div>
    </View>
  );
}
