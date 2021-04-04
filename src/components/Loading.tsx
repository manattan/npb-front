import { CircularProgress } from "@chakra-ui/react";
import { LoadingContainer } from "./StyledComponent";

interface Props {
  isLoading: boolean;
}

const Loading: React.FC<Props> = (props: Props) => {
  return (
    <LoadingContainer>
      {props.isLoading && (
        <CircularProgress isIndeterminate value={100} size="100px" />
      )}
    </LoadingContainer>
  );
};

export default Loading;
