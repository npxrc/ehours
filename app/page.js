export default function Home() {
  	return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-800 transition-all">
          <div id="wrapper">
			<div id="left" className="float-left border-r-black">

			</div>
			<div className="bg-white p-8 rounded shadow-md dark:bg-slate-500">
				<h2 className="text-2xl font-bold mb-6" id="signin-top-text">Sign In</h2>
				<form>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
							Username
						</label>
						<input
							className="appearance-none border rounded w-full py-2 px-3 
							text-gray-700 leading-tight focus:outline-none focus:border-blue-500
							dark:bg-neutral-400 dark:focus:border-black dark:placeholder:text-white"
							id="user" type="username" placeholder="Enter your District Username"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
							Password
						</label>
						<input
							className="appearance-none border rounded w-full py-2 px-3 
							text-gray-700 leading-tight focus:outline-none focus:border-blue-500
							dark:bg-neutral-400 dark:focus:border-black dark:placeholder:text-white"
							id="password" type="password" placeholder="Enter your District Passphrase"
						/>
					</div>
					<button id="button" className="bg-rose-400 hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all" type="submit">
						Sign In
					</button>
				</form>
			</div>
		  </div>
      </div>
  )	
}