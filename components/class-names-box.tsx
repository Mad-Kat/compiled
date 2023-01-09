import { ClassNames } from "@compiled/react";
import { error } from "../style/colors";

export const BoxStyles = ({ children }: any) => (
  <ClassNames>
    {({ css }) =>
      children({
        className: css`
          display: flex;
          width: 300px;
          height: 300px;
          border: 1px solid ${error};
          padding: 8px;
          flex-direction: column;
        `,
      })
    }
  </ClassNames>
);
