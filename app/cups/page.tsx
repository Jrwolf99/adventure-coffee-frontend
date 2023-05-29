'use client';

import React, { Suspense, useState } from 'react';
import FormModal from '../Components/Modals/FormModal';
import MyTable from '../Components/MyTable';
import { useDisclosure } from '@mantine/hooks';
import MyButton from '../Components/MyButton';

export default function CupPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="">
      <div className="w-full bg-gray-100 p-2 px-4 shadow-md mb-4 flex justify-end items-center">
        <div className="w-[180px]">
          <MyButton onClick={open}>Add a Cup of Coffee</MyButton>
        </div>
      </div>

      <MyTable />
      <FormModal opened={opened} close={close} />
    </div>
  );
}
