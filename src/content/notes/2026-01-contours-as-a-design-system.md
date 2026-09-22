---
title: Contour lines as a design system
date: 2026-01-27
summary: Notes from building ElevToposter — what happens when you treat a DEM as raw material for posters rather than analysis.
tags: [cartography, visualization, experiments]
cover: /work/posters/paramillo.jpg
---

A digital elevation model is a grid of numbers. Cartographers have spent two
centuries deciding how to draw it: contours, hachures, hillshade, hypsometric
tints, and every mixture of those. Each convention encodes a decision about
what matters — steepness, height, shape, or light.

ElevToposter started as a way to make those decisions explicit. Take SRTM,
crop a mountain, and then choose: contour interval, index-line weight,
illumination azimuth, colour ramp, whether the sea is a colour or an absence.
The same Paramillo massif comes out as a noir print or a plasma field
depending on four parameters.

What I learned: the hillshade is doing almost all the perceptual work, and
the contours are doing all the *informational* work. Remove the shading and
the poster becomes a map. Remove the contours and it becomes a photograph of
something that never existed.

The hero of this site is the same idea applied to a 12.5 m DEM of Quindío —
one hillshade, 100 m contours, index lines every 500 m. A design system with
one input.
