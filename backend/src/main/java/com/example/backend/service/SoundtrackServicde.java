package com.example.backend.service;

import com.example.backend.dao.SoundtrackInterface;
import com.example.backend.model.Soundtrack;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SoundtrackService {

    private SoundtrackInterface soundtrackInterface;

    public SoundtrackService(SoundtrackInterface SoundtrackInterface) {
        this.soundtrackInterface = soundtrackInterface;
    }

    public Soundtrack getSoundtrack() {
        return soundtrackInterface.getSoundtrack();
    }
}
