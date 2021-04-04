import { CircularProgress, Heading } from "@chakra-ui/react";
import { LoadingContainer, LoadingText } from "./StyledComponent";

interface Props {
  isLoading: boolean;
  text?: string
}

const Loading: React.FC<Props> = (props: Props) => {
  return (
    <>
    {props.isLoading && (
      <>
        <LoadingContainer>
          <CircularProgress isIndeterminate value={100} size="100px" />
        </LoadingContainer>
        <LoadingText length={props.text?.length}>
          <Heading size="md" style={{marginTop: '20px'}}>{props.text}</Heading>
        </LoadingText>
      </>
    )}  
    </>
  );
};

export default Loading;
