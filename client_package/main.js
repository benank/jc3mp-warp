let can_tp = true;

jcmp.ui.AddEvent('KeyUp', key => {
    let myKey = "Y".charCodeAt(0);
    if (can_tp && key == myKey)
    {
        jcmp.events.CallRemote('WarpMe');
    }
})


jcmp.ui.AddEvent('chat_input_state', s => {
  can_tp = !s;
});