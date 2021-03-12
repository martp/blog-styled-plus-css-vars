import React from "react";
import styled from "styled-components";
import { base } from "./styles/styles.base";
import { Title, Text } from "./styles/components.base";
import { Fill } from "./styles/components.layout";

const DarkMode = styled.div`
  display: none;
  @media ${base.media.colorScheme.dark} {
    display: block;
  }
`;

const LightMode = styled.div`
  display: block;
  @media ${base.media.colorScheme.dark} {
    display: none;
  }
`;

function App() {
  return (
    <Fill>
      <section>
        <Title>
          <DarkMode>Dark Mode</DarkMode>
          <LightMode>Light Mode</LightMode>
        </Title>
        <Text>Toggle Light/Dark Mode in your OS</Text>
      </section>
    </Fill>
  );
}

export default App;
