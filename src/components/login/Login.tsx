// import { Button } from '@mantine/core';
import { ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import image from '@/assets/logo.png';
import Image from "next/image";
import { IMaskInput } from 'react-imask';
import React from 'react';
import { setLogin } from '@/services/authetication/authentication';
import { useRouter } from 'next/router';
import Input from 'react-imask/esm/input';

export default function Login() {

    const navigate = useRouter();
    const [password, setPassword] = React.useState('');
    const [login, setUser] = React.useState('');

    const getloginUser = () =>  {
        const user = {
            login: sendFormattedCPF(login),
            senha: password
        }
        console.log(user)
        logar(user)
    }

    function sendFormattedCPF(dados: string) {
        const cpfWithoutFormat = dados.replace(/[^\d]/g, "");
        let login = ''
        return (login = cpfWithoutFormat);
      }

    const logar = async (credentials : any) => {
        try {
            const data = await setLogin(credentials)
            if (data) {
                navigate.push('/')
            }
        } catch (error) {
          console.error('Não foi possivel logar: ' + error);
        }
      };

    return (
        <div>
            <div className='flex items-center justify-center pb-3 mt-[20vh]' >
                <Image src={image} alt={'Imagem'} width={300} height={300}/>
            </div>
            <div className= "rounded-md flex items-center  justify-center bg-black">
                <section className="bg-white p-4 rounded-md w-[300px]">
                    <span className="flex justify-center mb-4 text-[24px] text-gray-950">Bem vindo</span>
                    <form action="" method="post"
                    autoComplete="off">
                        <div>
                            <IMaskInput required id="standard-required" placeholder="Digite o cpf" 
                                onChange={e => setUser(e.target.value)}
                                mask='000.000.000-00'
                                className='
                                text-gray-950 
                                w-[100%] 
                                p-[10px] 
                                mb-[10px] 
                                rounded-sm'
                            />
                        </div>
                        <div>
                            <Input id="standard-password-input" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Digite a senha"
                                type='password'
                                required 
                                className='text-gray-950 w-[100%] p-[10px] mb-[10px] rounded-sm' 
                            />
                        </div>
                        <div>
                            <Button variant="outlined" onClick={() => { getloginUser() }}   endIcon={<ChevronRight />}  className='rounded-md p-[10px] w-[100%] border-1 border-black text-gray-950'>Entrar</Button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
