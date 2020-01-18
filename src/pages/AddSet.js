import React from "react";

import { useForm } from "../hooks/useForm";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import { RULE_VALIDATOR_REQUIRED } from "../components/FormElements/validate";
import SetCreator from "../components/SetCreator/SetCreator";

const AddSet = () => {
  const [formState, inputHandler] = useForm({
    title: {
      value: "",
      isValid: false
    },
    compexity: {
      value: "",
      isValid: false
    },
    desc: {
      value: "",
      isValid: false
    }
  });

  return (
    <div className="AddSet">
      <Navigation />
      <main className="main-body">
        <Text element="h2">New Role Set</Text>
        <form>
        <Text element="h3">Set Details</Text>
          <Input
            id="title"
            type="text"
            placeholder="Role Set Title"
            label="Role Set Title"
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
            errorMsg="Please enter a title."
          />
          <Input
            id="complexity"
            element="select"
            label="Complexity"
            options={["simple", "moderate", "complex"]}
            initialValid={true}
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
          />
          <Input
            id="desc"
            element="textarea"
            placeholder="Description"
            label="Description"
            onInput={inputHandler}
          />
          <Text element="h3">Cards</Text>
          <SetCreator />
          <Button type="submit" disabled={!formState.isFormValid}>
            Add Set
          </Button>
        </form>
      </main>
    </div>
  );
};

export default AddSet;