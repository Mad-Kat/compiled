import "@compiled/react";
import { styled } from "@compiled/react";
import { ToggleSwitch } from "components/toggleSwitch";
import { useState } from "react";
import { BoxStyles } from "../components/class-names-box";
import { Button } from "../components/styled-button";
import { primary } from "../style/colors";

const IndexPage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <BoxStyles>
      {(props: any) => (
        <div {...props}>
          <Button color="green">Styled button</Button>

          <div
            css={{
              marginTop: 8,
              flexGrow: 1,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "sans-serif",
              color: primary,
              border: `1px solid ${primary}`,
            }}
          >
            CSS prop
          </div>

          <Center>
            <ToggleSwitch
              checked={checked}
              onClick={() => setChecked((p) => !p)}
            >
              <Label>asdf</Label>
            </ToggleSwitch>
          </Center>
        </div>
      )}
    </BoxStyles>
  );
};

export default IndexPage;

const Center = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;

const Label = styled.span`
  margin: 4px;
`;
