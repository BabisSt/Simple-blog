package com.example.backend.service;

import com.example.backend.dao.TrailerInterface;
import com.example.backend.model.Trailer;

import org.springframework.stereotype.Service;

@Service
public class TrailerService {

    private TrailerInterface trailerInterface;

    public TrailerService(TrailerInterface trailerInterface) {
        this.trailerInterface = trailerInterface;
    }

    public Trailer getTrailer() {
        return trailerInterface.getTrailer();
    }
}
