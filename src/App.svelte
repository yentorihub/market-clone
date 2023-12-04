<script>
  import Login from "./pages/Login.svelte";
  import Main from "./pages/Main.svelte";
  import Signup from "./pages/Signup.svelte";
  import Write from "./pages/Write.svelte";
  import Router from "svelte-spa-router";
  import Mypage from "./pages/Mypage.svelte";
  import Nfn from "./pages/Nfn.svelte";
  import "./css/style.css";
  import { user$ } from "./store";
  import {
    getAuth,
    GoogleAuthProvider,
    signInWithCredential,
  } from "firebase/auth";
  import { onMount } from "svelte";
  import Loading from "./pages/Loading.svelte";

  // const provider = new GoogleAuthProvider();
  // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  // let login = false;
  let isLoading = true;

  const auth = getAuth();

  const checkLogin = async () => {
    const token = localStorage.getItem("token");
    if (!token) return (isLoading = false);

    const credential = GoogleAuthProvider.credential(null, token);
    const result = await signInWithCredential(auth, credential);
    const user = result.user;
    user$.set(user);
    isLoading = false;
  };

  const routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/write": Write,
    "/my": Mypage,
    "*": Nfn,
  };
  onMount(() => checkLogin());
</script>

{#if isLoading}
  <Loading />
{:else if !$user$}
  <Login />
{:else}
  <Router {routes} />
{/if}
