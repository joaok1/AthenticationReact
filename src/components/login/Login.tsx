// import { Button } from '@mantine/core';
import { ChevronRight, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, Input, InputAdornment, TextField } from '@mui/material';
import image from '@/assets/logo.png';
import Image from "next/image";
import React from 'react';
export default function Login() {

    const [showPassword, setShowPassword] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    function teste() {
        console.log(password)
    }
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
                        <Input  required id="standard-required" placeholder="Digite o cpf" className='  text-gray-950 w-[100%] p-[10px] mb-[10px] rounded-sm' />
                    </div>
                    <div>
                        <Input id="standard-password-input" 
                            value={password} 
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
                            type={showPassword ? 'text' : 'password'} placeholder="Digite a senha"  autoComplete="current-password" required  className='text-gray-950 w-[100%] p-[10px] mb-[10px] rounded-sm' />
                    </div>
                    <div>
                        <Button variant="outlined" onClick={() => { teste() }} endIcon={<ChevronRight />}  className='rounded-md p-[10px] w-[100%] border-1 border-black text-gray-950'>Entrar</Button>
                    </div>
                </form>
            </section>
        </div>
        </div>
    )
}
