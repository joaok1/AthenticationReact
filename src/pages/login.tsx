/* eslint-disable jsx-a11y/alt-text */
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Paper, PasswordInput } from '@mantine/core';
import {Image} from '@mantine/core';
import Login from '@/components/login/Login'

export default function login() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm({
      initialValues: { cpf: ''},
  
      // functions will be used to validate values at corresponding key
      validate: {
        cpf: (value: string | any[]) => (value.length < 11 ? 'Cpf incompleto!' : null),

      },
    });
  
    return (
        <div>
          <Login />
        </div>
    );
  }