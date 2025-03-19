# Microsoft SSO

A Next.js app to retrieve tokens from a Microsoft account.

## How to Run

1. **Copy the Environment File:**  
   Duplicate `example.env.local` and rename it to `.env.local`.

2. **Fill in the Credentials:**  
   Edit `.env.local` and provide the required values:

   ```
   NEXT_PUBLIC_CLIENT_ID=<your_client_id>
   CLIENT_SECRET=<your_client_secret>
   ```

3. **Install Dependencies:**  
   Run the following command to install required packages:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

4. **Start the Application:**  
   Use the following command to run the Next.js app:
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```

Your app should now be running and ready to authenticate Microsoft accounts!
