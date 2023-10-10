// import { Button } from '@mantine/core';
import { ChevronRight, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, Input, InputAdornment } from '@mui/material';
import image from '@/assets/logo.png';
import Image from "next/image";
import InputMask from 'react-input-mask';
import { IMaskInput } from 'react-imask';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
// import {setLogin} from "@/services/authetication/authentication"
export default function Login() {

    const navigate = useRouter();
    const API_URL = 'http://localhost:1080/api/usuarios/auth';
    const API_URL_VERIFY = 'http://localhost:1080/api/usuarios/validatorUser';
    // const history = History; 
    const TOKEN_COOKIE_KEY : string = 'token';
    const USER_COOKIE_KEY: string  = 'user';
    const DADOS_USUARIO : string = 'dados_usuario';
    const [authenticated, setAuthenticated] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [login, setUser] = React.useState('');
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const getloginUser = () =>  {
        const user = {
            login: login,
            senha: password
        }
        user.login = sendFormattedCPF(user.login)
        console.log(user)
        setLogin(user)
    }

    function sendFormattedCPF(dados: string) {
        const cpfWithoutFormat = dados.replace(/[^\d]/g, "");
        let login = ''
        return (login = cpfWithoutFormat);
      }

    const setLogin = async (credentials : any) => {
        try {
            const response = await axios.post(API_URL, credentials);
            const token = response.data.token;
            const user = jwtDecode(token);
    
            Cookies.set(TOKEN_COOKIE_KEY, token, { expires: 1, secure: true });
            Cookies.set(USER_COOKIE_KEY, JSON.stringify(user), { expires: 1, secure: true });
            setAuthenticated(true);
            const getUserCookie: string  = Cookies.get('user') ?? '';
            const userCookie = JSON.parse(getUserCookie);
            const usuario = userCookie.sub;
            Cookies.set(DADOS_USUARIO, usuario, { expires: 1, secure: true });
            navigate.push('/')
        // //   showLoading();
        //   setTimeout(() => {
        //     // hideLoading();
        //     // messageSuccess();
        //     // Replace with your routing logic (React Router, for example)
        //     // history.push('/Despesas');
        //   }, 2000);
        } catch (error) {
          console.error(error);
        }
      };
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();}
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
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {showPassword ? <Visibility /> : <VisibilityOff />  }
                                    </IconButton>
                                </InputAdornment>
                            } 
                            type={showPassword ? 'text' : 'password'} placeholder="Digite a senha"  autoComplete="current-password" required  className='text-gray-950 w-[100%] p-[10px] mb-[10px] rounded-sm' 
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
