import { defineConfig } from 'vite'
<<<<<<< HEAD
=======
import react from '@vitejs/plugin-react'
>>>>>>> 7df3b7c1a4c4c62a1c976aeec9d54954b81861e0
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
<<<<<<< HEAD
  plugins: [
    tailwindcss(),
  ],
=======
  plugins: [react(), tailwindcss(),],
  
>>>>>>> 7df3b7c1a4c4c62a1c976aeec9d54954b81861e0
})