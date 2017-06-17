jcmp.events.AddRemoteCallable('WarpMe', player => {
    if (!player.vehicle)
    {
        player.position = player.aimPosition;
    }
})