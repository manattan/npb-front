import { CircularProgress, Heading } from "@chakra-ui/react";
import { LoadingContainer, LoadingText } from "./StyledComponent";

interface Props {
  isLoading: boolean;
  text?: string;
}

const Loading: React.FC<Props> = (props: Props) => {
  const alert =
    "サーバーを Heroku にデプロイしているため、応答に時間がかかる場合がございます。";

  const textLen =
    props.text?.length && props.text?.length > 50 ? props.text?.length : 50;

  return (
    <>
      {props.isLoading && (
        <>
          <LoadingContainer>
            <CircularProgress isIndeterminate value={100} size="100px" />
          </LoadingContainer>
          <LoadingText length={textLen}>
            <Heading size="md" style={{ marginTop: "20px" }}>
              {props.text}
            </Heading>
            <Heading size="md" style={{ marginTop: "20px" }}>
              {alert}
            </Heading>
          </LoadingText>
        </>
      )}
    </>
  );
};

export default Loading;
