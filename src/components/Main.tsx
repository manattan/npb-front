import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { getListsByKey } from "../API/main";

const Main: React.FC = () => {
  const history = useHistory();
  const submit = useCallback(
    async (values: { name: string }) => {
      console.log(values);
      const result = await getListsByKey(values);
      history.push({
        pathname: "/keyword",
        state: {
          result,
          name: values.name,
        },
      });
    },
    [history]
  );

  const validateName = (value: any) => {
    if (!value) {
      let error;
      error = "空欄です";
      return error;
    } else {
      return null;
    }
  };

  return (
    <>
      <Link to="/team">
        <Button>チームから検索する</Button>
      </Link>
      <Link to="/number">
        <Button>番号から検索する</Button>
      </Link>
      <Formik initialValues={{ name: "" }} onSubmit={submit}>
        {() => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }: { field: any; form: any }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">キーワード</FormLabel>
                  <Input {...field} id="name" placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button mt={4} type="submit">
              検索する
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Main;
