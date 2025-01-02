<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="Website seru buat kirim-kiriman pesan anonim! Tempat yang pas buat curhat, bercanda, atau kasih kejutan rahasia. Cari tahu apakah ada pesan anonim buat kamu di sini!">
    <meta name="keywords"
        content="pesan anonim, kirim pesan rahasia, website anonim, curhat online, kejutan rahasia, pesan misterius, cari pesan anonim, seru, rahasia, lucu, penasaran">
    <meta name="author" content="Yohanes Rio Irsan">
    <meta name="robots" content="index, follow">

    <title inertia>{{ config('app.name') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
