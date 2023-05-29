import React, { useState } from 'react';
import { Button, Modal } from '@mantine/core';
import { TextInput, Checkbox } from '@mantine/core';

export default function FormModal({ opened, close, title }) {
  const [data, setData] = useState({
    BrewingMethod: '',
    Bean: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('You clicked submit.');
    console.log(data);
    close();
  };

  return (
    <Modal opened={opened} onClose={close} title="Add a Freshly Brewed Cup">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <TextInput
          className="w-[100%]"
          label="Method of Brewing"
          value={data.BrewingMethod}
          onChange={(event) =>
            setData({ ...data, BrewingMethod: event.currentTarget.value })
          }
        />

        <Button
          color="teal"
          variant="light"
          type="submit"
          className="m-2 w-[100px]"
        >
          Submit
        </Button>
      </form>
    </Modal>
  );
}
